interface BasicOption {
  label: string;
  value: string;
}

type SelectOption = BasicOption;

type TabOption = BasicOption;

interface BasicUserInfo {
  /**
   * 头像
   */
  avatarUrl: string;
  /**
   * 用户id
   */
  id: string;
  /**
   * 用户token
   */
  nickName: string;
  /**
   * 权限
   */
  perms: string[];
  /**
   * 用户昵称
   */
  realName: string;
  /**
   * 用户角色
   */
  roles?: string[];
  /**
   * 用户名
   */
  username: string;
}

export type { BasicOption, BasicUserInfo, SelectOption, TabOption };
