function ABC(value) {
    if (value == -1) {
        throw new Error("値が-1なのでエラーです");
    }
}
try {
    ABC(1);
}
catch (error) {
    console.error(error.message);
}
