import { FC, ReactNode } from 'react';

import { ligth } from './ligth'
import { ThemeProvider as AppTheme, CssBaseline } from '@mui/material'

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AppTheme theme={ligth}>
            <CssBaseline />
            {children}
        </AppTheme>
    )
}
