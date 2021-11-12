import "@testing-library/jest-dom"
import { render } from "@testing-library/vue"
import AppLogo from '@/components/app-components/AppLogo.vue'

describe('Text Component Tests', () => {
    it("Renders Correctly", () => {
        const { getByText } = render(AppLogo)
        expect(getByText('zawQuiz')).toBeInTheDocument();
    }),

    it.each([
        "h1", "h2", "h3", "h4", "h5", "h6", "span", "p"
    ])("Smaller variant are working properly", () => {
        const {getByText} = render(AppLogo, {
            props: {
                variant: 'small',
            }
        })
        expect(getByText('zQ')).toBeInTheDocument();
    }),

    it("Logo is encapsulated with a link", () => {
        const {getByText} = render(AppLogo)
        expect(getByText('zawQuiz').closest('a')).toHaveAttribute("to", "/");
    })
})