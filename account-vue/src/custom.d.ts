//ts类型声明
type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number    // 数据类型object | string
    createdAt?: Date    // 类 / 构造函数   ?表示可以createdAt为undefined不存在
}