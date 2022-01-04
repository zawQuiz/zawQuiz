import AppButton from '@/components/app-components/AppButton.vue';
import { fireEvent, render } from '@testing-library/vue';
import "@testing-library/jest-dom";

describe('Button Tests', () => {
    it("Renders Correctly", () => {
        const { getByText } = render(AppButton, {
            props: {
                title: 'Button',
                variant: 'solid'
            }
        });
        expect(getByText('Button')).toBeInTheDocument();
    })
    it("if prop link provided button change to router-link element", () => {
        const { getByText } = render(AppButton, {
            props: {
                title: 'Button',
                variant: 'solid',
                link: '/page'
            }
        });
        expect(getByText('Button')).toHaveAttribute('to', '/page');
    })

    it("calls onClick func when clicked", () => {
        const handleClick = jest.fn()
        const { getByText } = render(AppButton, {
            props: {
                title: 'Button',
                variant: 'solid',
                onClick: handleClick
            }
        });
        fireEvent.click(getByText('Button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
    
    it("button takes the appropriate type that was given", () => {
        const { getByText } = render(AppButton, {
            props: {
                title: 'Button',
                variant: 'solid',
                type: 'submit'
            }
        });
        expect(getByText('Button')).toHaveAttribute('type', 'submit');
    })
})

