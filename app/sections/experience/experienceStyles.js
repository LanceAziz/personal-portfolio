export const styles = {
    timelineContainer: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        margin: "2rem 0",
        paddingLeft: "2rem",
        borderLeft: "2px solid #ccc"
    },
    timelineItem: {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "2rem",
        position: "relative"
    },
    timelineIcon: {
        width: "2rem",
        height: "2rem",
        backgroundColor: "#2e7d32",
        color: "white",
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "2rem",
        fontSize: "1.2rem",
        position: "absolute",
        left: "-1rem"
    },
    timelineContent: {
        marginLeft: "2rem"
    },
    timelineDate: {
        fontSize: "0.9rem",
        color: "#666",
        display: "block",
        marginBottom: "0.3rem"
    },
    timelineTitle: {
        fontWeight: "bold",
        margin: 0
    },
    timelineCompany: {
        fontWeight: 500,
        margin: "0.2rem 0",
        color: "#333"
    },
    timelineDescription: {
        margin: "0.4rem 0 0 0",
        color: "#444"
    }
};