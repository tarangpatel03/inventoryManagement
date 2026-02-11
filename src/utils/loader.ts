import React from 'react';
import { LoaderHandler } from '~/components/common/IMLoader';

export const loaderRef = React.createRef<LoaderHandler>();

export const showLoader = (message?: string) => {
  loaderRef.current?.show(message);
};

export const hideLoader = () => {
  loaderRef.current?.hide();
};
