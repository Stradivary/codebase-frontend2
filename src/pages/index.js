import React, { lazy, Suspense } from 'react';
import LazyFallback from '../components/elements/LazyFallback';

const Suspensed = (Element) => function suspense(props) {
  return (
    <Suspense fallback={<LazyFallback />}>
      <Element {...props} />
    </Suspense>
  );
};

export const Main = Suspensed(lazy(() => import('./Main')));
export const Welcome = Suspensed(lazy(()=> import('./Welcome')));
export const Second = Suspensed(lazy(()=> import('./Second')));
export const User = Suspensed(lazy(()=> import('./User')));
export const UserDetail = Suspensed(lazy(()=> import('./UserDetail')));
