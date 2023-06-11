class ShipView extends Ship {
    div = null

    constructor(size, direction, startX, startY) {
        super(size, direction);

        const div = document.createElement("div");
        div.classList.add("ship");

        Object.assign(this, { div, startX, startY });

    }

    // constructor(size, direction) {
    //     super(size, direction)
    //     const div = document.createElement("div")
    //     div.classList.add("ship")
    //     this.div = div
    // }
}