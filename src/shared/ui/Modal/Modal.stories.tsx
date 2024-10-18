import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
	isOpen: true,
	children:
		'Ea adipisicing sint minim enim nostrud est ad fugiat culpa magna id esse nostrud.',
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children:
		'Ea adipisicing sint minim enim nostrud est ad fugiat culpa magna id esse nostrud.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
