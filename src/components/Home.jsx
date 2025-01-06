import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Home() {
  return (
    <div>

      <Navbar/>
      
    <center>

    <div className="Home">
      <h1>Hello Home</h1>
      </div>
      </center>

    <br/>

      <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select tab</label>
        <select id="tabs" class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option>Statistics</option>
            <option>Services</option>
            <option>FAQ</option>
        </select>
    </div>
    <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
        <li class="w-full">
            <button id="stats-tab" data-tabs-target="#stats" type="button" role="tab" aria-controls="stats" aria-selected="true" class="inline-block w-full p-4 rounded-ss-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Statistics</button>
        </li>
        <li class="w-full">
            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" class="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Services</button>
        </li>
        <li class="w-full">
            <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="false" class="inline-block w-full p-4 rounded-se-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">FAQ</button>
        </li>
    </ul>
    <div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Public repositories</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Open source projects</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">1B+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Contributors</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Top Forbes companies</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">4M+</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
                </div>
            </dl>
        </div>
        <div class="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the world’s potential</h2>
            {/* <!-- List --> */}
            <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="leading-tight">Dynamic reports and dashboards</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="leading-tight">Templates for everyone</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="leading-tight">Development workflow</span>
                </li>
                <li class="flex space-x-2 rtl:space-x-reverse items-center">
                    <svg class="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                    <span class="leading-tight">Limitless business automation</span>
                </li>
            </ul>
        </div>
        <div class="hidden p-4 bg-white rounded-lg dark:bg-gray-800" id="faq" role="tabpanel" aria-labelledby="faq-tab">
            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                <h2 id="accordion-flush-heading-1">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                    <span>What is Flowbite?</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                    </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                    <span>Is there a Figma file available?</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                    <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                    <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                    <span>What are the differences between Flowbite and Tailwind UI?</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
                    </button>
                </h2>
                <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                    <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<br/>

{/* Carasul start  */}

    <center>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEUAAAB93/////9/5f9+4/9+4f+A5/9/5P+B6P8oKCh63fvt7e2srKxyz+uNjY152/gXFxdjY2PIyMgqT1ozMzP09PRpwNo+c4NuyOMHEhY5aXctVWEhP0hsxN9sbGxIhJZcqL8bNT0OHSJXn7NjtMx+fn5VVVU9PT00YW9De4xPkaQRJCqWlpbQ0NDm5uYVKjFTmK1oaGgODg7AwMBMTEwaMjorKytOTk6EhISioqIIFRlRlKQyXWdercUrUVxZo7q0tLT2SbolAAARVElEQVR4nO1dC1viOBcGm7RYp1ZBuWNBqgIKMqPOjOywzP//VV+Tk7RJm7SItvTbp+8+O9Zec5Jzz0ms1SpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFf6ruG3N+v3W88cffB7MPa8zuP36Jn0lNt4ImYZpNrDjzz9AZa8/doIHAzTsdie/9n0anm1gXAcgw9q3rYNt3UT8OYxN5998m3k42iZvJmus4a6zma7TNVDsOdMroLUHoGvV48AWnvZSH+o7Bk48Vi8niVtOIK6LbbbslNYOpWHH9fBJY1Bcw/dFx2QUmbZtWyLjGU5L88w6Gj8cyK3rOLaB4Fen0MbvBRfDMKyHm1pv0p86EZHYmKqeGDiGILG7/hs52fLhpLEotvnZ8GjDsDsMz7R2tsVptBTDuDYjtdueJd5kp8tv8XBwUnxuF3Yom1ZsTCZdIxw/fyhdGlNGNUqmbAYNOhjj2One1EJcGtvioPQ5C2NzFB/eW5te6Obb4o9iB/0+SVx4C7UlEjh43eAMaiu8gil9WeMAzy9HOLTb26pLHRtxddlnp5g2CRh0q5K2IVXLxjy/5n4cz7TJllp0bkOCTCqMj9w1QHZf+QD0F9rm1twD0Ke93hhqLs+51Bm7YIRcxCXzUXM/1TXlMokLi5oK7fWhw6nyBzandq29vUMGHeMy2Qvo9BTt12sb3PZhZj5SAo8WVUSmjiWOgTbOFJwpV59AoJ3W/A29t1Em35Tae6RnOwJPcLKRkx5Vge0pUyjs7uOF9O2QQKVZEd+Hy+bVUO2RacA8i7Nolg6hPBF39I4KvA9XDVA4hqOM93XLSaGZTmFLCBmtDDYtH4V29hhOsBT5+6nvKx+FbqYc9iBCriPGqqYyKOYonxxm69IRUGZsh4xZG2l3l0+XZtpD3wqZc8Aif2Omv53q5gy5LhYjSuFYe31hCjp0BqYfY71bQ/ujkdIFhcOnFGq1R58R6IAdnIOPih2dWXwGr61Mfuk01fNmoodtHrXzIdXZDMiJGGUK8r3U6ImpUSvypFn22NRILkRP9te383AAG5rqiLYNatQUjUkXzjXUQf4/9GqpImDIrKjDHQ/CJhLeR7hlcTBK5q4C+ChVrI+BHoQ7KpPfApkLs1RMuwxZIKwcKDA+qT5B4YDc0ThxvjdxGCndrhPADUB+dtsuc9/GikjR2seRLxh+XJn2hv3FuO24kbuNqWNK/8U4clIRdrv+1PvzFj1bwiQGS0XVET1+7C98BxuGheR5Ng2CmxCyTMPtjr3BhrzAE15WGvwBZTpoLXzXJLTtQVqcUhzQaTlb721bvmRioBvZtJ9pfZw0GQGZ9BUpPuBx4KRRFrBhwIiWEcGygjM4baRLFTttOr6d0lbsOiN/O10vPG/eCTCfe4vFerf1R06Ym1I8jtxdSdKJs62dKKbAKBgmh/2SIlB/2NS46wbjGhdejExnfXSF+rx2TZm8gDjTHe3m/27mzPnUzeITTFmYcfs287YONmN9hS2ze9QpqIFvWfF+7+460O+3LNBNzxOD/DIPbdPyfBfV5Tca9vRYQcasawqtYQFS5KFQJyBT6TOnzoxccDCtgmQGXLFVuq85YzAypUaArolSEzNoupHGowRTSpAQedE5kLrN604okDEuehwnvlQK447/PNpyJoOVLmS7zxA9WpyZN1TfoF2v00aCCKCMWZGvxiLqYGxgnw4chIFueEdsaLSYwZ2IaU0a/dZN8spHbyRoHsvVzBjngJZQ6mM6Hot7oQ7G/EN/eQTNb+zTKOqkhSkN8OFdFmS1dnbILNjwCyo+XUTfNEcRCc/Q0J2i1ekA/mbxfk/UrQS3Czf8HnL/fCklGrSNiD7J6aApReDLIdxjxez123zq+/46PrCsCopqXSiPk2NDz42qi/L35R75jDw2nFg+ExpKtSnoQ0tKXNT6XWLQg/8aOKb9mVby+JOJ6TevzuW+Mf5ykmS8ubz+J1lUydg0YLAZDWHldk66DUEzNiQdOwvV0q0VY1KG2y1nVSPf9M0jIxCbviKvBv2Pb8Ux4Zhh2VcxurfxJ4nFYOpKoaAGrlUEiSwJiJHSWWSKfg65Rcmb6ScqgaWp/CFLEfegb9SZ0i2Txgw/8FMYG0ylqT3+HlWKuAvNFKcdhihOYEzRjpnuBU26S7yawmMegGqIvwYzPv2gM0tgI8AUSjl+ZXwscvEjYw76b0Pn6c3Y9ICbVy0RiwP0vjRzo6GZwpKCuRGnDrpqE92yjsrgUyqPBnDXHr7gQQBThV1dNVpNHCupTlGT4hCN2ybKEqTNJfdZPJnShk+grSgDjiEaLDHubTUSxEE7RW5YhFY9tRYFQpF8pod1pkoCHwlJjSyQksCgG4SQaBNa2lQWZNpsL3fwowAznpqT4OW90kwamz9VUih6RQtu79JTM2vwzA+nQw9qjLNePWEButTHXR2FUsktm47CGQZ9QLWBlUdADO5GViZ6pCiP0uZSZXGCodYUGocYAivlkdaY7zMxO1HNX2vHUNKak/1Wy4CwWHkoU5hcN9MLJLgcmqIcbnWapiGGe2P+aPoXxvnJYQ/vocXUujS5qI2NoTASb7wb0rX1YzxC/kpAejC1jieyh4bg0gx19lB0XnbhQBtviffGG5HT7Cl3S1O0ucan0QiiKIZvESdbKbHDgvlVOTmmXeb3avXYv8JgiWULfbOugCRMY6Q+L2PO8sd5VbzxogNtFbo2tmirdE1DYDUeIAIBuujI48VUX0RQEmv2BUvdhB4syRp1hdwZ4Fkx+2aJpf3QBdYaJzhcwI6xSGYe/RNgJYb1htJ3hBjfmLM0jdjTrcRkqCGSAewdsCfz7lXW7pmv5zNznY3q8rUvqpWvYZ4GBlHK/A1dyWRgU1qcAQ8ETQeJVfk1c57o0ZWKfRE2fFUWtnab2DXIcxNTBb6jOBEVsPBWXDbrSuq+EyV2XByXYYrWiNuh9OLir0Cb68XEIm0whjSRD1bLGkvXh2PbNCwyne/EnnQjwWULGWVd9rzl8yRs+Vu+4PJORkJqaTuR806ohNZ8sV7049YGFBjoF9DXEoM/j3lxuLCEMVd0wgQ0NuxFyKtQcMKm13YwK7jXSlfmcrPucGJsOvSjeVjDKWim9DnaJwBbaMsGah4l9cPS/L3UXlvsGpaS4jWL/VEjmscrcgqxI2hGZDoe8ST9iElr3HLIykaNPruTWYgWdBTh/9bOjeaZsZFYEp0remskuFkGansTOmrRCj0IhfdY6spGOxRpYNP2cC3sWUBkvvCajLexJbhimLUmmhJlyiYj2gslNnIPQJtiQ5jiJvKeFx1pCHRcoooNRf52ogRBiUEjpnU3icwcNt2jrS15XNvxGRfDbk87EOCxEoR0PnXFmYqWt3WsGIG44Rx32XqnbcXKmDAyG+5oOm91QBtpqtUBY7jHnvzxtl3UsOLlYxb2C5nYTsVw4SRqLklhG1fzafqUB4620UiUtRHZHs1LsjFWa51WfIlt1xm1/fFuul4A1tPd1m93HTflqXp95B2jEkoLMA7qFmNS2I0oLFJaatFDrKuRxuWsoIXhcImS/1SVMDIMl5bxl60KesjqvDezdds1TKTLkKaAlG0iZzsfspkcq0xbKnCn1AK9MOmvfVIraqF9KtoJAxukVH/rDcBzg6Sedib4OJgmVipthn1vRxZcCIRgDiKGnC2d9nY9F5db1B4hgirTElK+bYQqE82Wx+J2oD3bo+6o2+0GitUfM+2rjGhducyxFKDKAf2juMLSbHHF0QLC1ZVvNJ7CWYv2CwXMD6vznDxVLjWY0+0qLfpUKuQsBWBmoqG20GtWLTwWznEeVRcFSHqrHIAoFmn0O19iGYkcy7vqsvOD8q0DzpgfdmO1TGxUtWHHY0PP9EdC+krn2pD5ZxaYODa/gvR5qhxLSg7ENmNZKy/0sYmksoACu/pqAzAXZVr5BAt3x/obvIiqAd8xKsVngWWymgK+owD2VEjLt+941d+MOXKpc8l77DtVMPbYbYUpVMxGMHXjD5Y+L9Ni7n12W3HEeCOjuhCWJORS2nUg6EK8jDr6npAHyKpkLiGFe4xh7TEkMbNYpHwUUjnMnFbohwWWWd6KPlQ5FtqZurRGdmXlTIrtjOi2WzpdmrE/DYW4517qrok1vkVDmbaNmGYHdMwg8vxa+lwu2kNzFQuoXEsJ6Hp8chzxHWnNlBGHPYZKtU8UuJrKIhGKcFfWgK5wn09HW7+WseHrMTChrdZuXeXxvJNJXE2+9gUj3SAB0+OcGnsY3BTVcOubfLUUuGrrcF/hbbxiBdBVl5wcFb6+rlWxF3SHjylSrnyFQuNSqVKeWVFM+E6U+3m3uFxis51M7kAiSpPDORYeNdUl0Z7spuSDhbq1jlD8L2BA0X4+hc6fACsglmKi3gKF++onjNuCzzliZMl/yYQVVJWLSXkpW12oy2yNcViSoir0E1aEW4YvzP+zJYBptdBHAYtwre3s+cftsD91olImrKlrFv6ABzLdrTcYDlseq7GM1cSVAUPE24ptG4mlMGZX52e3hJ0n6IYvwf/MsKiT4ceFFxZzi1NqOPXvzNQ6ruoP6aRv/Xk87JL16tjCWe6zlyhYSWis8mDdkNqKseEu9pjI9ZzYvjuoZJvRCZiFbSXlJnjvvy8288lGTGzHOmS0y+Ryx9HxXTJlbWFn2/nIArrebDpyA8uI7O60XLPbCkz+nQ2GB2nC5+FwonbFK1SoUKFChQoVKlSo8J/DwxXg9EdOHzglbw+/dvf+7dv5TU6fUuLnSYjr5d0nXvTj6fz8XHXhG3k1HF6u+LeaF5/41MdweiLi7OfBL7ogz6suEArP6NGT+KnCxlGmkDXlEFxEQyUjpPBS/tT9wZ/6GCiFy2azuTyj3/196IuyKaQsunq6uft7TY7eD/3SB3Eaded3KiDhlYf7ywfxzh8P99/vr+SnHy6jezIpFF6/LJpLL8Pvnqzg8KHJNAIn6WbJ1NFLpBfZPcvX4PiMssBqdbaMf4FT+CBK3/IhfltuECl8CSm8i8TlO7RIEKBftfg9T7XX8HgV/4JE4d8CSIpBOYb3MFxUXE6Ien0ST4A2uhe1xukeFFIuPXn5VRRlHAKFV7QF5IjohFXARw8rfubm+uTbafDznNzzSs5Qrny6v79bnax+1i7u6JDe3N0l5CukkPN58/dpUdQRUAq/Bcb66eWEC8ovckBN8s9QfVwwb4A0kxxS1Q/C9ARXMjWN4FyslL5BPojZQ8pjhCeZwliFdAjtPWc/m+KFbGsRqKPoQ9evX0+LGjKF15R/iI58ubwJcLmMpPT1/NvLkto0QiG5INnOPSis1X6vom8VpU1FClfMCIuKkzFu7ek6OkEoPItIB+xFIeH2JntTwqzkBErh++938ZsrmUIidhLRnELJ79qTQoJ7MKQF6RuuSykJjO3I8cv5E8cDU6Grp8urUA4PHcPoXFGOKafwQujWJqMiwioc4b+CHEr3aCn8G1EYdslryP35I7SHdxGfCrqU4TrsclGXSvdooyfSXyv27F927obcXJDtjyx+M+TTVy59gchAm8IGvZ4xCi+jUXh5CO+R49o70ikPvOeuqB9B++k7VTZ5JRViiCj8EfEpVTXLp99PTfBtmJNz8esl1DTg0zSffr+fsROk1cuH1/eIyoBtV6C1iJJmfmxwCpTpSzEEil7bTcinD6LmJMJ1LilXStAv8QwZzBd2HCoQIeKlVL9LL7kuKo8het4RnwqNO6PRErcWZ3ecQvEe6rddib/UBJJ5fCJGI8SXLYrCIL5fMpn/0SSA43dgrxVv7xPhysCdfFg2l1wJwj3XTA5rV82QIyl+Lyk7nn2LDB8z92fNQrNtWpxeSTb5x5XqHnkoTq9i6uMqadYvikuzVahQoUKFChUqVKhQoUKFChUqVKhQoUKFChUqVKhQocL/N/4HkQUhPq5+EJEAAAAASUVORK5CYII=" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<br/>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS65YSxnV0O5BzHbIQh-SdECVMcA57w2oxt8Q&s" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</center>
{/* close  */}
<Footer/>

    </div>



  )
}
