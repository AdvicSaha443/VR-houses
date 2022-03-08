AFRAME.registerComponent("tour", {
    schema: {
        state: {type: "string", default: "places-list"},
        selectedImage: {type: "string", default: "_house-house1"}
    },
    init: function() {
        this.placesContainer = this.el;
        this.cameraEl = document.querySelector("#camera");
        this.createPlace();
    },
    tick: function() {
        const { state } = this.el.getAttribute("tour");

        //console.log("yea");
        if(state === "view"){
            this.hideEl([this.placesContainer]);
            this.showEl();
        }
    },

    hideEl: function(list){
        list.map(el=>{
            el.setAttribute("visible", false);
        });
    },

    showEl: function(){
        const {selectedImage} = this.data;
        const skyEl = document.querySelector("#main-container");

        skyEl.setAttribute("material", {
            src: `./images/${selectedImage}.jpg`,
            color: "#fff"
        });
    },

    createPlace: function() {
        const details = {
            home1: {
                position: {
                    x: 20,
                    y: -4.5,
                    z: -5.5
                },

                rotation: {
                    x: 0,
                    y: -90,
                    z: 0
                },

                src: "./images/_house-house1.jpg",
                title: "house1",
                id: "house1"
            },
            home2: {
                position: {
                    x: 4.5,
                    y: -5.5,
                    z: 25
                },

                rotation: {
                    x: 180,
                    y: 0,
                    z: 0
                },

                src: "./images/_house-house2.jpg",
                title: "house2",
                id: "house2"
            },
            home2: {
                position: {
                    x: -9,
                    y: 34,
                    z: -100
                },

                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                },

                src: "./images/_house-house3.jpg",
                title: "house3",
                id: "house3"
            },
        };

        for(var key in details){
            const item = details[key];
            const thumbnail = this.createThumbnail(item);
            const title = this.createTitleEl(item);
            
            thumbnail.appendChild(title);
            this.placesContainer.appendChild(thumbnail);
        }
    },

    createThumbnail: function(item) {
        const entityEl = document.createElement("a-entity");
        const id = `_house-${item.id}`;

        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("geometry", {primitive: "circle", radius: 3});
        entityEl.setAttribute("position", item.position);
        entityEl.setAttribute("rotation", item.rotation);
        entityEl.setAttribute("material", {src: item.src, opacity: 0.6});
        entityEl.setAttribute("cursor-listener", {});

        return entityEl;
    },

    createTitleEl: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {font: "exo2bold", align: "center", width: 60, color: "#fff", value: item.title});
        entityEl.setAttribute("visible", true);

        return entityEl;
    }
})