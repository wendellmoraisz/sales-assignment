const formatPrice = (value) => {
    return `R$${Number(value).toFixed(2).toString().replace(".", ",")}`;
}

export default formatPrice;