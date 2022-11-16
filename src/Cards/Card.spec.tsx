import { fireEvent, render, screen } from "@testing-library/react"
import Cards from "./Cards";
import CardProps from "./Card.type";

describe('Card', () => {
    const cardProps : CardProps = {
        body : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Touloulou`,
        title : "maCarte",
        footer : "Je m'en footer",
        buttonLabel : "Je suis un bouton",

    }
    it('doit fournir un rendu', () => {
        render(<Cards title={cardProps.title} body={cardProps.body}/>)
        const card = screen.getByText("maCarte");
        expect(card).toBeInTheDocument();
    })
    it('doit afficher le titre dans une section', () => {
        render(<Cards title={cardProps.title} body={cardProps.body}/>)
        const card = document.getElementsByClassName("card-body")[0]
        expect(card.textContent).toBe(cardProps.body);
    })
    it('doit afficher le footer dans une section', () => {
        render(<Cards title={cardProps.title} body={cardProps.body} footer={cardProps.footer}/>)
        const element = document.getElementsByClassName("card-footer")[0]
        expect(element.textContent).toBe(cardProps.footer);
    })
    it('ne doit pas afficher de footer', () => {
        render(<Cards title={cardProps.title} body={cardProps.body}/>)
        const element = document.getElementsByClassName("card-footer")[0]
        expect(element).toBeUndefined();
    })
    it('doit avoir un bouton avec le label quand je met la props', () => {
        render(<Cards title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel}/>)
        const element = document.getElementsByClassName("card-button")[0]
        expect(element).toBeInTheDocument();
    })
    it('doit appeler l\'action du bouton quand on clique dessus', () => {

        //fonction espion
        const handleClick = jest.fn();

        render(<Cards title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} buttonAction={handleClick}/>)
        const button = document.querySelector("button")


        // cliquer sur le bouton
        fireEvent.click(button!);

        // vérifier que la fonction déclenché par le bouton est appelée
        expect(handleClick).toHaveBeenCalled();
    })
})

