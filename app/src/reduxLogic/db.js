import React from "react"

const initState = [{
    title: "Test",
    lang: "1",
    translang: "2",
    difficulty: "1",
    comment: "test",
    id: 1,
    slides: [
        {
            number: 1,
            type: 1,
            values: {
                word: "Hello",
                translate: "Привет"
            }
        },
        {
            number: 2,
            type: 1,
            values: {
                word: "Cat",
                translate: "Кот"
            }
        }
    ],
    settings: {}
    
}];

class DictionaryStore
{
    constructor(init = initState)
    {
        this.__dictionarys__ = [...init];
    }
 
    push(newDict)
    {
        let i = this.__dictionarys__.push(
            {
                ...newDict,
                slides: [],
                id: !this.__dictionarys__.length ? 1 : this.__dictionarys__[this.__dictionarys__.length - 1].id + 1,
                settings: {}
            }
            );

        return this.__dictionarys__[i - 1].id;
        
    }

    updateById(id, values)
    {
    

        this.__dictionarys__ = this.__dictionarys__.map( dict => {
            if(dict.id === id) return {
                    ...dict,
                    ...values.setting,
                    slides: values.slides,
                    
                }
            else return dict;
        } );

   
        return this.getById(id);
    }
    getById(id)
    {
        return this.__dictionarys__.filter( dict => dict.id === id )[0] || null;
    }

    filter(filters)
    {

        let newArr =  this.__dictionarys__.filter( dict => {
            for(let i in filters){
                if(filters[i] === null) continue;
                if(filters[i] !== dict[i]){
                    return false;
                } 
            }
            return true;

        } );
        return newArr;
    }
    remove(id)
    {
        this.__dictionarys__ = this.__dictionarys__.filter(dict => {
            if(dict.id === id) return false;
        })
    }

    get dictionarys() {
        return [...this.__dictionarys__];
    }
}

let dictionarysDB = new DictionaryStore();


export default dictionarysDB;