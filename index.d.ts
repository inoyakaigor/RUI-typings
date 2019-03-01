import {Component} from 'react'

declare namespace RamblerUI {
    export type variation = 'regular' | 'awesome'
    export type size = 'small' | 'medium'
    export type iconPosition = 'left' | 'right'

    export class Avatar extends Component<any, any> {}

    export class Button extends Component<any, any> {}

    export class Calendar extends Component<any, any> {}

    export interface CheckboxProps {
        name?: string
        disabled?: boolean
        className?: string
        style?: object
        iconPosition?: iconPosition
        checked?: boolean
        indeterminate?: boolean
        checkboxStyle?: object
        checkboxClassName?: string
        labelStyle?: object
        labelClassName?: string
        variation?: variation
        size?: size
        onCheck?: () => any
    }
    export class Checkbox extends Component<CheckboxProps, any> {}

    export class ComplexSearch extends Component<any, any> {}

    export class Dropdown extends Component<any, any> {}

    export class FieldGroup extends Component<any, any> {}

    export class Hint extends Component<any, any> {}

    export class IconButton extends Component<any, any> {}

    export class Input extends Component<any, any> {}

    export class Loader extends Component<any, any> {}

    export class Menu extends Component<any, any> {}

    export class Notification extends Component<any, any> {}

    export class Pagination extends Component<any, any> {}

    export class Popup extends Component<any, any> {}

    export class Radio extends Component<any, any> {}

    export class Select extends Component<any, any> {}

    export class SideNav extends Component<any, any> {}

    export class Snackbar extends Component<any, any> {}

    export class Spinner extends Component<any, any> {}

    export class Stepper extends Component<any, any> {}

    export class Switcher extends Component<any, any> {}

    export class Tabs extends Component<any, any> {}

    export class TagsInput extends Component<any, any> {}

    export class Textarea extends Component<any, any> {}

    export class Toggle extends Component<any, any> {}

    export class Tooltip extends Component<any, any> {}

    type TypographyType = 'h1' | 'h2' | 'h3' | 'text' | 'quote' | 'epigraph' | 'source' | 'timestamp' | 'description' | 'galleryDescription' | 'photoSource' | 'list'

    interface TypographyProps {
        type: TypographyType
        tagName: string
        uppercase: boolean
        children: React.ReactChild
    }

    export class Typography extends Component<TypographyProps, any> {}

    interface ListProps {
        numbered: boolean
    }

    export class List extends Component<ListProps, any> {}

    export class Icons extends Component<any, any> {}
}

export = RamblerUI
