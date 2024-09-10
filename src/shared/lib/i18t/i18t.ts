import { t } from 'i18next';
import { I18N_NS } from 'shared/constants/common';

export const i18t = (text: string): string => t(text, { ns: I18N_NS });
