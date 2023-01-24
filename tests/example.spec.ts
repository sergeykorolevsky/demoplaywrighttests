import { test, expect } from '@playwright/test';

test('New test cascade', async ({page})=>{
  await page.goto('https://cascade-usa.com/home');
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('sergeykorolevsky2015@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('StevenGerrard_2015');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#username_button').click();
  await page.locator('#logout_button').click();
});

test('New test cascade2', async ({page})=>{
  await page.goto('https://cascade-usa.com/home');
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('sergeykorolevsky2015@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('StevenGerrard_2015');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#username_button').click();
  await page.locator('#logout_button').click();
});