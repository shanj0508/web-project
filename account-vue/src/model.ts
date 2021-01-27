const localStorageKeyName="recordList"
const model = {
    clone(data:RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data));
    },
    fetch(){
        return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];   //强制声明
    },
    save(data:RecordItem[]){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
    }
}

export default model