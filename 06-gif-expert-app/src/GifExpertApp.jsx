import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z']);

    const onAddCategory = (onNewCategory) => {
        //Valorant
        if (categories.includes(onNewCategory)) return;
        setCategories([onNewCategory, ...categories])
    }


    return (
        <>
            <h1>Gif Expert APP</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} />
                    ))
                }
            </ol>

        </>
    )
}