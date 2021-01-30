import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';
type Tag = {
    id: string
    name: string
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]  //输入的参数类型=>输出的结果类型
    create: (name: string) => 'success' | 'duplicated'   //联合类型
    save: () => void   //void表示为空
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');   //强制声明
        return this.data;
    },
    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    },
    create(name: string) {
        //this.data=[{id:'1',name:'1'},{id='2',name='2'}]

        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) {
            return 'duplicated';    //表示文件名重复
        }
        const id = createId().toString();
        this.data.push({id, name: name});
        this.save();
        return 'success';    //表示成功

    },
    update(id, name) {
        const idList = this.data.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    remove(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;

    }
};

export default tagListModel;