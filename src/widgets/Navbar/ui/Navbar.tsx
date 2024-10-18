import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				className={cls.links}
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={onToggleModal}
			>
				{t('Sign in')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Sint nulla labore ex ad excepteur culpa labore aliqua cillum eiusmod
				incididunt. Mollit et in minim consequat pariatur aute magna irure id.
				Labore minim nisi veniam sunt proident reprehenderit in quis ipsum sunt
				consectetur ex. Laboris nostrud culpa et adipisicing enim. Quis sint
				deserunt cupidatat mollit.
			</Modal>
		</div>
	);
};
