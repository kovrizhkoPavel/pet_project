import { getClassName } from 'shared/lib/classNames/getClassName';
import { Menu } from '@headlessui/react';
import { CSSProperties, ReactNode } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './Dropdown.module.scss';

type TItem = {
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
  content: string | ReactNode;
}

type TDropdownPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type TDropdownProps = {
  className?: string;
  content: string | ReactNode;
  items: TItem[];
  position?: TDropdownPosition
}

const mapDirectionClasses: Record<TDropdownPosition, string> = {
  'top-left': cls.itemTopLeft,
  'top-right': cls.itemTopRight,
  'bottom-left': cls.itemBottomLeft,
  'bottom-right': cls.itemBottomRight,
};

export const Dropdown = (props: TDropdownProps) => {
  const {
    className,
    content,
    items,
    position = 'bottom-right',
  } = props;

  return (
    <Menu
      as="div"
      className={getClassName(cls.dropdown, {}, [className])}
    >
      <Menu.Button>{content}</Menu.Button>
      <Menu.Items className={getClassName(cls.items, {}, [mapDirectionClasses[position]])}>
        {items.map((item, i) => (
          <Menu.Item as="div" className={cls.item} disabled={!!item.disabled} key={i}>
            {(item.href
              ? <AppLink className={getClassName(cls.link)} to={item.href}>{item.content}</AppLink>
              : (
                <Button
                  className={cls.button}
                  variant={ButtonVariant.CLEAR}
                  onChange={item.onClick}
                >
                  {item.content}
                </Button>
              ))}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};
