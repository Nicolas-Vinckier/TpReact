function Plat({ plat }){
    return (
        <div>
            <h1>{plat.name}</h1>

            <img src={plat.image}/>
            <p>{plat.difficulty}</p>
            <p>{plat.cuisine.toUpperCase().repeat(2)}</p>
        </div>
    )
}

export default Plat;