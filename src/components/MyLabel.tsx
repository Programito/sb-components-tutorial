import './myLabel.css'

export interface MyLabelProps {
    /**
     * Este el mensaje a mostrar en la etiqueta
     */
    label?: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3'
    /**
     * Este quiere todo capitalizado
     */
    allCaps?: boolean
    /**
     * Colores basico del color
     */
    color?: 'primary' | 'secondary' | 'tertiary'
    /**
     * Colores personalizado de la fuente
     */
    fontColor?: string
    /**
     * 
     */
    backgroundColor?: string
}

export const MyLabel = ({
        allCaps = false,
        color = 'primary',
        label = 'No label',
        size = 'normal',
        fontColor,
        backgroundColor = 'transparent'
    }: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{color: fontColor, backgroundColor}}>
            {allCaps? label.toUpperCase() : label}
        </span>
    )
}

export default MyLabel;