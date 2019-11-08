function generateItem() {
    let item = getItem();
    console.log(item);

    document.write(`
    <div>
        <p id="name"><b>Name:</b> ${item.name}</p>
        <p id="price"><b>Price:</b> ${item.price}</p>
        <p id="primary_property"><b>Property 1:</b> ${item.primaryProperty}</p>
        <p id="secondary_property"><b>Property 2:</b> ${item.secondaryProperty}</p>
        <p id="description"><b>Description:</b> ${item.description}</p>
    </div>
    `);
}

function getItem() {
    
    let randomName = `${randomItem(nameData).nameWord1} ${randomItem(nameData).nameWord2} ${randomItem(nameData).nameWord3}`;

    return {
        name: randomName,
        price: randomItem(propertyData).price,
        primaryProperty: randomItem(propertyData).primaryProperty,
        secondaryProperty: randomItem(propertyData).secondaryProperty,
        description: randomItem(propertyData).description
    }
}

function randomItem(items) {
    return items[randomNumber(0, items.length)];
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}