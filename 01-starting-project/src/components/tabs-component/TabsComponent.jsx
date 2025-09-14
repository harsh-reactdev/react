export const TabsComponent = function ({ children, tabButtons, ContainerElement = "menu" }) {
    return (
        <>
            <ContainerElement>
                {tabButtons}
            </ContainerElement>
            {children}
        </>
    );
};

export default TabsComponent;