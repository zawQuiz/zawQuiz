import "@testing-library/jest-dom"
import { render } from "@testing-library/vue"
import AppText from '@/components/app-components/AppText.vue';

describe('Text Component Tests', () => {
    it("Renders Correctly", () => {
        const { getByText } = render(AppText, {
            props: {
                text: 'Text',
                variant: 'p',
                size: 18
            }
        })
        expect(getByText('Text')).toBeInTheDocument();
    }),

    it.each([
        "h1", "h2", "h3", "h4", "h5", "h6", "span", "p"
    ])("Text Components renders as %s", (variant) => {
        const {getByText} = render(AppText, {
            props: {
                text: 'Text',
                variant: variant,
                size: 18
            }
        })
        expect(getByText('Text').closest(variant)).toBeInTheDocument();
    }),

    it("Text has the given size", () => {
         const {getByText} = render(AppText, {
            props: {
                text: 'Text',
                variant: "p",
                size: 18
            }
        })
        expect(getByText('Text')).toHaveStyle("font-size: 18px;");
    })
})