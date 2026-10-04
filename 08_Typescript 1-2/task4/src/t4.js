// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = prompt('Enter brand') || 'No brand';
    const model = prompt('Enter model') || 'No model';
    // TODO: return object containing brand and model
    return {
        type: 'electronic',
        brand: brand,
        model: model,
    };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    const title = prompt('Enter title') || 'No title';
    const author = prompt('Enter author') || 'No author';
    // TODO: return object containing title and author
    return {
        type: 'book',
        title: title,
        author: author,
    };
}
// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();
// Display the details of each product
function displayProductDetails(product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);
export {};
