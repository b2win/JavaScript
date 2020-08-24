
const circle = {
    radius: 1,
    get area() {
        return Math.Pi * this.radius * this.radius;
    }
};

console.log(circle.area);