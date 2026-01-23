const codes = document.querySelectorAll('.code');

        // Focus the first input initially for better UX
        codes[0].focus();

        codes.forEach((code, idx) => {
            
            // Event Listener 1: Handle Typing (Forward Movement)
            code.addEventListener('keydown', (e) => {
                
                // Allow only numbers (0-9) and Backspace
                if(e.key >= 0 && e.key <=9) {
                    // Clear the field before entering new number 
                    // (ensures only 1 digit remains if user types fast or overwrites)
                    codes[idx].value = ''; 
                    
                    // Allow the default action (typing the number) to happen, 
                    // then move focus slightly after
                    setTimeout(() => {
                        if(codes[idx+1]) {
                            codes[idx+1].focus();
                        }
                    }, 10);
                } 
                
                // Event Listener 2: Handle Backspace (Backward Movement)
                else if(e.key === 'Backspace') {
                    
                    // Make sure we empty the current field immediately
                    setTimeout(() => {
                        codes[idx].value = '';
                        
                        // If we have a previous field, focus it
                        if(codes[idx-1]) {
                            codes[idx-1].focus();
                        }
                    }, 10);
                }
            });
        });