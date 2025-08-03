export const styles = {
    dividerOutter: (padding) => ({
        width: "100%",
        padding: `${padding} 0`
    }),
    dividerInner: (width, borderWidth,color) => ({
         width: width,
         borderTop: `${borderWidth} solid ${color}`
    })
}
