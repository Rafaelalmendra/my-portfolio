'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from 'components';

import { Languages } from 'lucide-react';

import { Link, usePathname } from '../../../navigation';

const LanguageToggle = () => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={pathname} locale="pt">
          <DropdownMenuItem>Português (Brasil)</DropdownMenuItem>
        </Link>
        <Link href={pathname} locale="en">
          <DropdownMenuItem>English</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LanguageToggle };
