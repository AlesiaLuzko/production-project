import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button/Button';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toogle = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
	};

	return (
		<Button
			className={classNames('', {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toogle}
		>
			{t(short ? 'short language' : 'Language')}
		</Button>
	);
};
