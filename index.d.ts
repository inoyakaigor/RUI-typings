import {Component} from 'react'

export namespace RamblerUI {
    class Avatar extends Component<any, any> {}

    class Button extends Component<any, any> {}

    class Calendar extends Component<any, any> {}

    class Checkbox extends Component<any, any> {}

    class ComplexSearch extends Component<any, any> {}

    class Dropdown extends Component<any, any> {}

    class FieldGroup extends Component<any, any> {}

    class Hint extends Component<any, any> {}

    class IconButton extends Component<any, any> {}

    class Input extends Component<any, any> {}

    class Loader extends Component<any, any> {}

    class Menu extends Component<any, any> {}

    class Notification extends Component<any, any> {}

    class Pagination extends Component<any, any> {}

    class Popup extends Component<any, any> {}

    class Radio extends Component<any, any> {}

    class Select extends Component<any, any> {}

    class SideNav extends Component<any, any> {}

    class Snackbar extends Component<any, any> {}

    class Spinner extends Component<any, any> {}

    class Stepper extends Component<any, any> {}

    class Switcher extends Component<any, any> {}

    class Tabs extends Component<any, any> {}

    class TagsInput extends Component<any, any> {}

    class Textarea extends Component<any, any> {}

    class Toggle extends Component<any, any> {}

    class Tooltip extends Component<any, any> {}

    type TypographyType = 'h1' | 'h2' | 'h3' | 'text' | 'quote' | 'epigraph' | 'source' | 'timestamp' | 'description' | 'galleryDescription' | 'photoSource' | 'list'

    interface TypographyProps {
        type: TypographyType
        tagName: string
        uppercase: boolean
        children: React.ReactChild
    }

    class Typography extends Component<TypographyProps, any> {}

    interface ListProps {
        numbered: boolean
    }

    class List extends Component<ListProps, any> {}

    class Icons extends Component<any, any> {}
}
