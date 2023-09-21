module.exports = (temp, product) => {
// const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);  //note if we used the usual placeholder notation like '{%PRODUCTNAME%}' then only the first occurence wil get replaced, in this way all the occurences will be replaced /g => global
    output = output.replace(/{%IMAGE%}/g, product.image);    // note it is not a good practice to manipulate the argument that we pass into a function, in this case temp
    output = output.replace(/{%PRICE%}/g, product.price);   
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%SLUG%}/g, product.slug);  //don't replace id with slugs


    if(!product.organic){
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    }
    return output;
}  