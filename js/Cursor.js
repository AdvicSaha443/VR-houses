AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: {default: "", type: "string"}
    },

    init: function() {
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvent();
        this.handleMouseClickEvent();
    },

    handleMouseEnterEvent: function() {
        this.el.addEventListener("mouseenter", () => {
            const placesContainer = document.querySelector("#places-container");
            const { state } = placesContainer.getAttribute("tour");

            if(state === "places-list"){
                this.handlePlaceListState();
            };
        });
    },

    handleMouseLeaveEvent: function() {
        this.el.addEventListener("mouseleave", () => {
            const placesContainer = document.querySelector("#places-container");
            const { state } = placesContainer.getAttribute("tour");

            if(state === "places-list"){
                this.handlePlaceListState_();
            }
        })
    },

    handleMouseClickEvent: function() {
        this.el.addEventListener("click", args => {
            const placesContainer = document.querySelector("#places-container");
            const { state } = placesContainer.getAttribute("tour");

            if(state === "places-list"){
                const id = this.el.getAttribute("id");
                const placesId = ["_house-house1", "_house-house2", "_house-house3"];
                console.log("this");
                console.log(id);

                if(placesId.includes(id)){
                    console.log("this2");
                    placesContainer.setAttribute("tour", {state: "view", selectedImage:id});
                }
            }
        })
    },

    handlePlaceListState: function() {
        const id = this.el.getAttribute("id");
        const placesId = ["house1", "house2", "house3"];
        
        if(placesId.includes(id)){
            const placesContainer = document.querySelector("#places-container");

            placesContainer.setAttribute("cursor-listener", {selectedItemId: id});
            this.el.setAttribute("material", {opacity: 1});
        };
    },

    handlePlaceListState_: function() {
        const id = this.el.getAttribute('id');
        const placesId = ["house1", "house2", "house3"];

        if(placesId.includes(id)){
            this.el.setAttribute("material", {opacity: 1});
        }
    }

})