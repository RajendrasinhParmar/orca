import React, { FC } from 'react';
import { lighten } from 'polished';
import theme from '../../../theme';

interface MessageColorfulIconProps {
  width?: string;
  color?: string;
}

const MessageColorfulIcon: FC<MessageColorfulIconProps> = ({ width }) => {
  const DEFAULT_WIDTH = '22';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" width={width || DEFAULT_WIDTH}>
      <g fill={lighten(0.1, theme.colors.general.warning)}>
        <path d="M495.041 91.628a20.853 20.853 0 016.293 15.04v298.667a20.853 20.853 0 01-6.293 15.04l-47.04-47.04-137.813-137.814 180.48-139.52 4.373-4.373zM64.001 373.334l-46.933 46.933-.107.107a20.853 20.853 0 01-6.293-15.04V106.668a21.054 21.054 0 013.627-11.947l7.04 1.28 180.48 139.52L64.001 373.334z" />
      </g>
      <g fill={theme.colors.general.warning}>
        <path d="M17.068 420.268l46.933-46.933 137.813-137.813 54.187 41.813 54.187-41.813 137.813 137.813 47.04 47.04a20.853 20.853 0 01-15.04 6.293h-448a20.853 20.853 0 01-15.04-6.293l.107-.107z" />
        <path d="M480.001 85.334a20.857 20.857 0 0115.04 6.293L490.668 96l-180.48 139.52-54.187 41.813-54.187-41.813L21.334 96.001l-7.04-1.28a21.387 21.387 0 0117.707-9.387h448z" />
      </g>
      <path
        d="M502.678 84.182a31.402 31.402 0 00-22.677-9.515h-448A31.998 31.998 0 005.484 88.715a31.629 31.629 0 00-5.483 17.952v298.667a31.164 31.164 0 009.323 22.485 31.402 31.402 0 0022.677 9.515h448c17.632-.099 31.901-14.368 32-32V106.668a31.168 31.168 0 00-9.323-22.486zm-246.677 179.68L38.774 96.001h434.453L256.001 263.862zm231.403 149.067a10.211 10.211 0 01-7.403 3.072h-448a10.43 10.43 0 01-7.605-3.264 10.294 10.294 0 01-3.061-7.403V109.473l164.405 127.04-129.28 129.28 15.083 15.083 131.2-131.2 46.731 36.117a10.666 10.666 0 0013.035 0l46.731-36.117 131.2 131.2 15.083-15.083-129.28-129.28 164.427-127.04v295.861a10.445 10.445 0 01-3.266 7.595z"
        fill={theme.colors.grey[70]}
      />
    </svg>
  );
};

export default MessageColorfulIcon;
