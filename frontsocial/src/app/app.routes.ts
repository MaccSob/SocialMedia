import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Registration } from './registration/registration';

export const routes: Routes = [
    path: 'signup',
    Component: Registration
];
