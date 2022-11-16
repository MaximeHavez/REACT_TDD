import Cards from "./Cards";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardProps from "./Card.type";

// Définition de la story (l'intégraion du composant)
export default{
    // Titre de la story
    title: "Card",
    // le composant à tester
    component: Cards,
} as ComponentMeta<typeof Cards>;

// Version de base pour créer le composant
const Template: ComponentStory<typeof Cards> = (args: CardProps) => <Cards {...args}/>

//Création d'une story basic
export const Basic = Template.bind({});

Basic.args = {
    title: 'Titre',
    body: 'Lorem ipsum doloret sit amet consectatur...'
}

export const avecFooter = Template.bind({});

avecFooter.args = {
    title: 'Titre',
    body: 'Lorem ipsum doloret sit amet consectatur...',
    footer: 'Ceci est un footer'
}

export const avecButton = Template.bind({});

avecButton.args = {
    title: 'Titre',
    body: 'Lorem ipsum doloret sit amet consectatur...',
    footer: 'Ceci est un footer',
    buttonLabel: 'Oh oui clique moi'
}