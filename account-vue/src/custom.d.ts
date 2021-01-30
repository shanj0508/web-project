//ts类型声明
type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number    // 数据类型object | string
    createdAt?: Date    // 类 / 构造函数   ?表示可以createdAt为undefined不存在
}
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

interface Window {
    tagList: Tag[]
    findTag: (id: string) => Tag | undefined
    createTag: (name: string) => void
    removeTag: (id: string) => boolean
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
}
