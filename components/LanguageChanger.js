import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiTranslate, HiChevronDown, HiCheck } from 'react-icons/hi';

const languageMap = {
  en: "English",
  uz: "O'zbekcha",
  ru: "Русский"
};

const brandTeal = 'bg-[#14d3b2]';
const brandNavy = 'text-[#10131a]';

const LanguageChanger = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const handleLanguageChange = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex items-center gap-2 rounded-lg border border-white px-4 py-2 font-semibold text-white bg-transparent transition-colors duration-200 hover:bg-[#14d3b2] hover:text-[#10131a] focus:outline-none focus:ring-2 focus:ring-[#14d3b2] focus:ring-offset-2"
        >
          <HiTranslate className="h-5 w-5" />
          {locale.toUpperCase()}
          <HiChevronDown className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {Object.keys(languageMap).map((lang) => (
              <Menu.Item key={lang}>
                {({ active }) => (
                  <button
                    onClick={() => handleLanguageChange(lang)}
                    className={`
                      group flex w-full items-center rounded-md px-4 py-2 text-base transition-all duration-150
                      ${active ? 'bg-[#14d3b2] text-[#10131a] scale-105' : 'text-gray-900'}
                      ${locale === lang ? 'font-bold' : 'font-normal'}
                    `}
                  >
                    <span className="flex-1 flex items-center gap-2">
                      {languageMap[lang]}
                      {locale === lang && <HiCheck className="ml-1 h-5 w-5 text-[#14d3b2]" />}
                    </span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageChanger; 