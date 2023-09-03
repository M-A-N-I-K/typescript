import ListItem from "./listItem"

interface List {
    list : ListItem[],
    load() : void,
    save() : void,
    clearList() : void,
    addItem(itemObj : ListItem) : void,
    removeItem(id : string) : void 
}

export default class FullList implements List{
    // Singelton : The singleton is one of the most well-known design patterns.Singletons are used to create an instance of a class if it does not exist or else return the reference of the existing one. This means that singletons are created exactly once during the runtime of the application in the global scope.

    static instance : FullList = new FullList();

    private constructor(
        private _list : ListItem[] = []
    ){}

    get list() : ListItem[]{
        return this._list;
    }

    public load(): void {
        const storedList : string | null = localStorage.getItem("myList");
        if(typeof storedList !== "string") return;
        const parsedList : {_id : string , _item : string , _checked : boolean}[] = JSON.parse(storedList);
        parsedList.forEach((itemObj) =>{
            const newItem = new ListItem(itemObj._id,itemObj._item,itemObj._checked);
            FullList.instance.addItem(newItem);
        })
    }
    public save(): void {
        localStorage.setItem("myList",JSON.stringify(this._list));
    }
    public clearList(): void {
        this._list = [];
        this.save();
    }
    public addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
        this.save();
    }
    public removeItem(id: string): void {
        this._list = this._list.filter((item) => item.id !== id);
        this.save();
    }
}

