import React from 'react';
import Box from '@mui/system/Box';

export default function BoxBasic() {
    return (
        <Box component="section" sx={{ p: 2, border: '2px dashed green'}}>
            Dra og slipp filene dine her 
        </Box>
    );
}