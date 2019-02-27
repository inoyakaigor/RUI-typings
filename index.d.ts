import React from 'react'

export namespace RamblerUI {
    class Avatar extends React.Component<any, any> {}

    class Button extends React.Component<any, any> {}

    class Calendar extends React.Component<any, any> {}

    class Checkbox extends React.Component<any, any> {}

    class ComplexSearch extends React.Component<any, any> {}

    class Dropdown extends React.Component<any, any> {}

    class FieldGroup extends React.Component<any, any> {}

    class Hint extends React.Component<any, any> {}

    class IconButton extends React.Component<any, any> {}

    class Input extends React.Component<any, any> {}

    class Loader extends React.Component<any, any> {}

    class Menu extends React.Component<any, any> {}

    class Notification extends React.Component<any, any> {}

    class Pagination extends React.Component<any, any> {}

    class Popup extends React.Component<any, any> {}

    class Radio extends React.Component<any, any> {}

    class Select extends React.Component<any, any> {}

    class SideNav extends React.Component<any, any> {}

    class Snackbar extends React.Component<any, any> {}

    class Spinner extends React.Component<any, any> {}

    class Stepper extends React.Component<any, any> {}

    class Switcher extends React.Component<any, any> {}

    class Tabs extends React.Component<any, any> {}

    class TagsInput extends React.Component<any, any> {}

    class Textarea extends React.Component<any, any> {}

    class Toggle extends React.Component<any, any> {}

    class Tooltip extends React.Component<any, any> {}

    type TypographyType = 'h1' | 'h2' | 'h3' | 'text' | 'quote' | 'epigraph' | 'source' | 'timestamp' | 'description' | 'galleryDescription' | 'photoSource' | 'list'

    interface TypographyProps {
        type: TypographyType
        tagName: string
        uppercase: boolean
        children: React.ReactChild
    }

    class Typography extends React.Component<TypographyProps, any> {}

    interface ListProps {
        numbered: boolean
    }

    class List extends React.Component<ListProps, any> {}

    class Icons extends React.Component<any, any> {}
}
