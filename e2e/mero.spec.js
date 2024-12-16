// This my Technical Evaluation for LoopQA
import { test, expect } from "@playwright/test";
    
    test.beforeEach(async({page}) => {
            await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
            await page.getByLabel('Username').click();
            await page.getByLabel('Username').fill('admin');          
            await page.getByLabel('Password').click();
            await page.getByLabel('Password').fill('password123');
            await page.getByRole('button', { name: 'Sign in' }).click();
})

    test.describe("Web Application", async  () => {
        test ("Test Case 1", async ({page}) => {
            
            await page.getByRole('button', { name: 'Web Application Main web' }).click();
            await page.getByRole('heading', { name: 'To Do (2)' }).click();
            await expect(page.getByRole('heading', { name: 'Implement user authentication' })).toBeTruthy();
            await expect (page.getByText('Feature').first()).toBeTruthy();
            await expect (page.getByText('High Priority').first()).toBeTruthy();
           
        });

        test ("Test Case 2", async ({page}) => {
            
            await page.getByRole('button', { name: 'Web Application Main web' }).click();
            await page.getByRole('heading', { name: 'To Do (2)' }).click();
            await expect(page.getByRole('heading', { name: 'Fix navigation bug' })).toBeTruthy();
            await expect (page.getByText('Bug').first()).toBeTruthy();
        
           
        });

        test ("Test Case 3", async ({page}) => {
            await page.getByRole('button', { name: 'Web Application Main web' }).click();
            await page.getByRole('heading', { name: 'To Do (2)' }).click();
            await expect(page.getByRole('heading', { name: 'Design system updates' })).toBeTruthy();
            await expect (page.getByText('dfsfdfs').first()).toBeTruthy();
    });

    test("Test Case 4", async ({page}) => {
        
        await page.getByRole('button', { name: 'Mobile Application Native' }).click();
        await page.getByRole('heading', { name: 'To Do (1)' }).click();
        await expect(page.getByRole('heading', { name: 'Push notification system' })).toBeTruthy();
        await expect(page.locator('div').filter({ hasText: /^Feature$/ }).locator('span')).toBeTruthy();
       
       
    });

    test ("Test Case 5", async ({page}) => {
        
        await page.getByRole('button', { name: 'Mobile Application Native' }).click();      
        await page.getByRole('heading', { name: 'In Progress (1)' }).click();
        await expect(page.getByRole('heading', { name: 'Offline mode' })).toBeTruthy();
        await expect(page.getByText('Feature').nth(1)).toBeTruthy();
        await expect(page.getByText('High Priority')).toBeTruthy();

    });

    test ("Test Case 6", async ({page}) => {
        await page.getByRole('button', { name: 'Mobile Application Native' }).click(); 
        await page.getByRole('heading', { name: 'Done (1)' }).click();
        await expect(page.getByRole('heading', { name: 'App icon design' })).toBeTruthy();
        await expect(page.getByText('Design', { exact: true })).toBeTruthy();
       
    });

});

