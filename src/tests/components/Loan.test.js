import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import Loan from '../../components/Loan';


describe('Loan', () => {

it('component should render', () => {
    const tree = renderer.create(
        <Loan />
    ).toJSON();

    expect(tree).toMatchSnapshot();
})

it('component should render with correct values', () => {
     const component = renderer.create(
        <Loan />
    );

    let tree = component.toJSON();

    const form = tree.children.filter(child => child.type === 'form')[0];

    const input = form.children.filter(child => child.type === 'input')[0];

    input.props.onChange({
        target: {
            value: '7.61' // 3 805 000
        }
    })

    tree = component.toJSON();

    const changes = tree.children.filter(child => child.type === 'form')[0];

    const valueText = changes.children.filter(child => child.type === 'p')[0];

    const value = valueText.children.filter(child => child.type === 'span')[0]

    expect(value.children[0]).toEqual('3 805 000');
})

it('default state with enzyme', () => {
   const component = shallow(<Loan />);
   expect(component.find('[name="amount"]').text()).toEqual('2 500 000,- kr')
})


it('component should render with correct values, risks is checked and form is submitted (enzyme)', () => {
   const component = mount(<Loan />);
   const input = component.find('input').first();
   const checkbox = component.find('[name="doRisk"]').first();
   const button = component.find('button').first();

   input.simulate('change', {target: {value: '8.01'}});
   checkbox.simulate('change', {target: {checked: true}});
   expect(component.find('[name="amount"]').text()).toEqual('4 005 000,- kr');
   expect(button.hasClass('btnDisabled')).toEqual(false);

})

});