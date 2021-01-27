const localStorageKeyName = 'tagList';
type TagListModel = {
    data: string[]
    fetch: () => string[]  //输入的参数类型=>输出的结果类型
    create: (name: string) => 'success'|'duplicated'   //联合类型
    save: () => void   //void表示为空
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
        if (this.data.indexOf(name) >= 0) {
            return 'duplicated';    //表示文件名重复
        }
        this.data.push(name);
        this.save();
        return 'success';    //表示成功

    }
};

export default tagListModel;