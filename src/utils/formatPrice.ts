export const formatPrice = (valueInCents: number) => {
    const formattedPrice= valueInCents / 100
    return formattedPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}