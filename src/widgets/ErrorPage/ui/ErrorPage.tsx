import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
	className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={classNames(cls.ErrorPage, {}, [className])}>
			<p>{t('Something went wrong')}</p>
			<button onClick={reloadPage}>{t('Refresh the page')}</button>
		</div>
	);
};
