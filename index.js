let url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json";

async function display() {
        let res = await fetch(url)
        let data = await res.json()

try{
        if (data){
        let root = document.getElementById("root")

        data.Results.forEach((e, i)=> {  

        let div = document.createElement("div");
        div.innerHTML =`
        <div class="card">
                        <div class="card-body">                        
                            <div>${e.Name}</div>
                            <div class="card-text">${e.VehicleType}</div>
                            <div>${e.DateAvailableToPublic}</div>
                           </div>
                    </div>`
        
        root.appendChild(div);
        }
)
        }

else{

}

}
catch (error) {
        console.error(error);
}
        

}

display()