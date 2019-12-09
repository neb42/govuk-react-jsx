import React, { useEffect } from 'react'
import TabsJS from 'govuk-frontend/govuk/components/tabs/tabs'

function Tabs(props) {
  const { className, id, idPrefix, items, title, ...attributes } = props

  const tabsRef = React.createRef()

  useEffect(() => {
    new TabsJS(tabsRef.current).init()
  }, [])

  const tabContent = items.map((item, index) => {
    const { id: itemId, label: itemLabel, ...itemAttributes } = item

    return (
      <li
        key={itemId}
        className={`govuk-tabs__list-item${
          index === 0 ? ' govuk-tabs__list-item--selected' : ''
        }`}
      >
        <a
          className="govuk-tabs__tab"
          href={`#${itemId ? itemId : `${idPrefix}-${index}`}`}
          {...itemAttributes}
        >
          {itemLabel}
        </a>
      </li>
    )
  })

  const tabs = <ul className="govuk-tabs__list">{tabContent}</ul>

  const panels = items.map((item, index) => {
    const { id: itemId, panel, ...itemAttributes } = item

    return (
      <section
        key={itemId}
        className={`govuk-tabs__panel${
          index > 0 ? ' govuk-tabs__panel--hidden' : ''
        }`}
        id={itemId}
        {...itemAttributes}
      >
        {panel.html || panel.text}
      </section>
    )
  })

  return (
    <div
      id={id}
      className={`govuk-tabs ${className}`}
      {...attributes}
      data-module="govuk-tabs"
      ref={tabsRef}
    >
      <h2 className="govuk-tabs__title">{title}</h2>
      {tabs}
      {panels}
    </div>
  )
}

Tabs.defaultProps = {
  title: 'Contents'
}

export { Tabs }
