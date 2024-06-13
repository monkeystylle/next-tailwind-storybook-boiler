import React from 'react';

interface AvatarProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * variant styles
   */
  variant?: 'filled' | 'outlined';
  /**
   * variant styles
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * variant styles
   */
  color?: 'primary' | 'secondary';
  /**
   * Text content of the button
   */
  children?: React.ReactNode;
}

const Avatar = (props: AvatarProps) => {
  const {
    variant = 'filled',
    size = 'md',
    color = 'primary',
    children = 'Buttton',
    ...rest
  } = props;

  const baseStyles =
    'rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeStyles = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg',
  };

  const colorStyles = {
    primary: {
      filled: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400',
      outlined:
        'bg-transparent hover:bg-blue-100 text-blue-500 border-blue-500 border focus:ring-blue-400',
    },
    secondary: {
      filled: 'bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400',
      outlined:
        'bg-transparent hover:bg-gray-100 text-gray-500 border-gray-500 border focus:ring-gray-400',
    },
  };

  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[color][variant]}`;

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Avatar;
